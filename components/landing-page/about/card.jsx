import Image from "next/image";
import moneyIcon from "@/public/images/money-icon.png";

const Card = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Image src={moneyIcon} alt="money icon" />
            <span className="text-[18px] font-semibold">100% Free</span>
            <p>
            Anda hanya perlu membuat akun dan dapat mengakses semuanya secara
            gratis
            </p>
        </div>
    );
}

export default Card;
