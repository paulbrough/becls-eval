import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-medium shadow-md mb-large">
      <Link href="/" className="w-40 block">
        <img
          src="https://media.beckman.com/-/media/corporate/logos/bcls_logo_horizontal_2-color.svg"
          alt="Beckman Coulter Life Sciences"
        />
      </Link>
    </div>
  );
}
