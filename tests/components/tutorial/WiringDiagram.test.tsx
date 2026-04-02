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
  it("renders the alt text as an accessible label on the image", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("img", { name: diagram.altText })).toBeInTheDocument();
  });

  it("renders all connections in the table", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("cell", { name: "Arduino Pin 13" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "GND" })).toBeInTheDocument();
  });

  it("renders connection notes in the table", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("cell", { name: "Black = ground" })).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByText("Wiring Diagram")).toBeInTheDocument();
  });

  it("renders figcaption with connection summary", () => {
    render(<WiringDiagram diagram={diagram} />);
    const captions = screen.getAllByText(/Arduino Pin 13 → Resistor/);
    expect(captions.length).toBeGreaterThan(0);
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

  it("renders the Tap to expand button on all screen sizes", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("button", { name: "Tap to expand diagram" })).toBeInTheDocument();
  });

  it("opens lightbox when Tap to expand is clicked", () => {
    render(<WiringDiagram diagram={diagram} />);
    fireEvent.click(screen.getByRole("button", { name: "Tap to expand diagram" }));
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

  it("closes lightbox when Escape key is pressed", () => {
    render(<WiringDiagram diagram={diagram} />);
    fireEvent.click(screen.getByRole("button", { name: "Tap to expand diagram" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
