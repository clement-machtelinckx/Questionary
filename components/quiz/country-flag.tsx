import { cn } from "@/lib/utils";

type CountryFlagProps = {
    countryCode: string;
    description: string;
    className?: string;
};

const COUNTRY_CODE_PATTERN = /^[a-z]{2}$/;

export function CountryFlag({ countryCode, description, className }: CountryFlagProps) {
    const normalizedCode = countryCode.trim().toLowerCase();
    const flagClassName = COUNTRY_CODE_PATTERN.test(normalizedCode)
        ? `fi-${normalizedCode}`
        : undefined;

    return (
        <span
            role="img"
            aria-label={description}
            style={{ display: "block", width: "100%" }}
            className={cn(
                "fi block aspect-[4/3] w-full max-w-72 overflow-hidden rounded-md border bg-contain bg-center bg-no-repeat leading-none shadow-sm before:absolute",
                flagClassName,
                className,
            )}
        />
    );
}
