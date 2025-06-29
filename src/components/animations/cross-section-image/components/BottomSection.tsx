interface Props {
  targetDiv: React.RefObject<HTMLDivElement | null>;
}

export function BottomSection({ targetDiv }: Props) {
  return (
    <div className="py-[150px] px-7 grid h-[800px] lg:grid-cols-2 lg:py-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-[48px] font-bold">
          Smart Financing Solutions Tailored to Distinct Business Requirements
        </h1>

        <p className="text-[18px] my-3">
          Quantum partners with financial institutions and other B2B non-bank
          entities to deliver streamlined, customized financial offerings to
          businesses. Our approach ensures responsible and transparent access to
          credit with a frictionless experience. We empower entrepreneurs to
          elevate their businesses to the next level and effectively manage
          uneven cash flow through our flexible solutions.
        </p>

        <button className="w-fit bg-white text-black px-4 py-2 rounded-md my-5">
          Explore Our Solutions
        </button>
      </div>

      <div ref={targetDiv} className="h-[600px] w-[600px] m-auto"></div>
    </div>
  );
}
