import { Button } from '@/components/ui';
import { IBanner } from "@/interfaces/IBanner"

export const HEROIMAGES_DATA: IBanner[] = [
    {
        id: "hero-001",
        subtitle: "Welcome to Our Platform",
        title: "Build. Launch. Grow.",
        description:
            "A modern solution to help you bring your ideas to life with powerful tools and beautiful design.",
        imageUrl: "/images/hero/hero-banner-1.png",
        type: 'image-only',
        cta: (
            <Button size="lg" variant="primary">
                Get Started
            </Button>
        ),
    },
];
