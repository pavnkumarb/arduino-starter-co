import { render, screen } from "@testing-library/react";
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

describe("WiringDiagram", () => {
  it("renders the alt text as an accessible label", () => {
    render(<WiringDiagram diagram={diagram} />);
    expect(screen.getByRole("img", { name: diagram.altText })).toBeInTheDocument();
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
});
