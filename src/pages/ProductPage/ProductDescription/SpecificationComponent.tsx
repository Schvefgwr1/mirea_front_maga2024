export default function SpecificationComponent() {
    const SpecificationRow = ({ title, value }: { title: string; value: string }) => {
        return (
            <div className="specification-row">
                <div className="spec-title">{title}</div>
                <div className="spec-value">{value}</div>
            </div>
        );
    };

    return (
        <div className="product-content">
            <div className="product-content-cont">
                <div className="text-container">
                    <div className="title">Specifications</div>
                    <div className="text-content">
                        Here are the detailed specifications of the product.
                    </div>
                </div>
                <div className="specification-contener">
                    <SpecificationRow title="Processor" value="Apple M1 Pro Chip" />
                    <SpecificationRow title="GPU" value="16-Core GPU" />
                    <SpecificationRow title="RAM" value="16GB Unified Memory" />
                    <SpecificationRow title="Storage" value="1TB SSD" />
                    <SpecificationRow title="Display" value="16-inch Liquid Retina XDR" />
                    <SpecificationRow title="Battery Life" value="Up to 21 hours" />
                    <SpecificationRow title="Weight" value="2.1 kg" />
                </div>
            </div>
        </div>
    );
}
