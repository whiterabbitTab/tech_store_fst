import { Image } from "antd";
import { IAbout } from "../types/about.type";

export const aboutInfo: IAbout[] = [
  {
    darkMode: true,
    heading: <h1>A Family That Keeps On Growing</h1>,
    text: <div className="flex flex-col gap-y-2"><p>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
    <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p></div>,
    img: '../../../about_1.png'
  },
  {
    darkMode: false,
    heading: <h1> <Image src="../../../public/heading_2.png" preview={false} alt="Heading 3" className="pointer-events-none select-none size-10" /> Shop.com</h1>,
    text: <div className="flex flex-col gap-y-2"><p>Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.</p></div>,
    img: '../../../about_2.png'
  },
  {
    darkMode: true,
    heading: <h1> <Image src="../../../public/heading_3.png" preview={false} alt="Heading 3" className="pointer-events-none select-none size-10" /> Now You're In Safe Hands</h1>,
    text: <div className="flex flex-col gap-y-2"><p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
    <p>*Performance compared to i7-9700. Specs varies by model.</p></div>,
    img: '../../../about_3.png'
  },
  {
    darkMode: false,
    heading: <h1> <Image src="../../../public/heading_4.png" preview={false} alt="Heading 3" className="pointer-events-none select-none size-10" /> The Highest Quality of Products</h1>,
    text: <div className="flex flex-col gap-y-2"><p>We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.</p></div>,
    img: '../../../about_4.png'
  },
  {
    darkMode: true,
    heading: <h1> <Image src="../../../public/heading_5.png" preview={false} alt="Heading 3" className="pointer-events-none select-none size-10" /> We Deliver to Any Regions</h1>,
    text: <div className="flex flex-col gap-y-2"><p>We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.</p></div>,
    img: '../../../about_5.png'
  }
]