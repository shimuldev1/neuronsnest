import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
      
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-30 w-[98px]"
      >
        <Image
          className="transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
