import FeatureCard from "./sub-components/FeatureCard"
import { FEATURE_DATA } from "@/data/feature.data";

const FeaturedSection: React.FC = () => {

    return (
        <section className="py-6 bg-transparent">
            <div className="container px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURE_DATA.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection