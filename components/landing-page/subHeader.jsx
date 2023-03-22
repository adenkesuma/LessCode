const SubHeader = ({title, paragraf}) => {
    return (
        <section className="py-6 sm:py-8 xl:py-10 flex flex-col gap-3">
            <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">{title}</h2>
            <p className="text-[13px] md:text-[14px] lg:text-[16px] md:text-left font-normal">{paragraf}</p>
        </section>
    )
}

export default SubHeader;

