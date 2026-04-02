import { render, screen, fireEvent } from "@testing-library/react";
import WiringDiagram from "@/components/tutorial/WiringDiagram";
import type { WiringDiagram as WiringDiagramType } from "@/lib/tutorials";

const diagram: WiringDiagramType = {
  altText: "LED connected to pin 13",
  imagePlaceholder: "/images/test.svg",
  connections: [
    { from: "Arduino Pin 13", to: "Resistor", color: "yellow", note: "Yellow wire" },
    { from: "LED anode", to: "Resistor", color: "yellow" },
    { from: "LED cathode", to: "GND", color: "black", note: "Black = ground" },
  ],
};

const diagramWithLabels: WiringDiagramType = {
  ...diagram,
  componentLabels: [
    { component: "LED", note: "long leg (anode) → resistor" },
    { component: "220Ω resistor", note: "between pin 13 and LED" },
  ],
};

describe("WiringDiagram", () => {
  it("renders the alt text as an accessible label", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getAllByRole("img", { name: diagram.altText })[0]).toBeInTheDocument();
  });

  it("renders all connections", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByText("Arduino Pin 13")).toBeInTheDocument();
    expect(screen.getByText("GND")).toBeInTheDocument();
  });

  it("renders connection notes", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByText("Black = ground")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByText("Wiring Diagram")).toBeInTheDocument();
  });

  it("does not render Component Notes section when componentLabels is absent", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.queryByText("Component Notes")).not.toBeInTheDocument();
  });

  it("renders Component Notes section when componentLabels is present", () => {
    render(<WiringDiagram diagram={diagramWithLabels} />);
    expect(screen.getByText("Component Notes")).toBeInTheDocument();
    expect(screen.getByText(/long leg \(anode\) → resistor/)).toBeInTheDocument();
    expect(screen.getByText(/220Ω resistor/)).toBeInTheDocument();
  });

  it("renders the Tap to expand button on mobile affordance", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("button", { name: "Tap to expand diagram" })).toBeInTheDocument();
  });

  it("opens lightbox when Tap to expand is clicked", () => {
    render(<WiringDiagram diagram={diagram} />);
    const expandBtn = screen.getByRole("button", { name: "Tap to expand diagram" });
    fireEvent.click(expandBtn);
    expect(screen.getByRole("dialog", { name: diagram.altText })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close diagram" })).toBeInTheDocument();
  });

  it("closes lightbox when × button is clicked", () => {
    render(<WiringDiagram diagram={diagram} />);
    fireEvent.click(screen.getByRole("button", { name: "Tap to expand diagram" }));
    fireEvent.click(screen.getByRole("button", { name: "Close diagram" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes lightbox when backdrop is clicked", () => {
    render(<WiringDiagram diagram={diagram} />);
    fireEvent.click(screen.getByRole("button", { name: "Tap to expand diagram" }));
    const dialog = screen.getByRole("dialog", { name: diagram.altText });
    fireEvent.click(dialog);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
