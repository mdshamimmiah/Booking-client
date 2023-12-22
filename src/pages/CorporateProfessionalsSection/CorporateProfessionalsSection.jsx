
const CorporateProfessionalsSection = () => {
    return (
        <section className="p-6 lg:w-3/4 mx-auto my-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Corporate Professionals</h2>
                    <p className="text-xl text-gray-700 text-justify">
                        Tailored for corporate professionals looking for management solutions.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus at condimentum mauris, sit amet maximus turpis.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src="https://i.ibb.co/V275wJs/cor.jpg"
                        alt="Corporate Professionals"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default CorporateProfessionalsSection;