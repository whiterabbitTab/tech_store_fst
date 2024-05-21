import styles from "../../styles/Home.module.scss"
import { Carousel, Image } from "antd"

export const Greeting = () => {
    return (
        <div className={styles.block__greeting}>
            <Carousel arrows infinite={false}>
                <div>
                    <Image className='pointer-events-none' src="../../../public/greeting_bg.png" alt="CarouselPhoto" preview={false} />
                </div>
                <div>
                    <Image className='pointer-events-none' src="../../../public/greeting_bg.png" alt="CarouselPhoto" preview={false} />
                </div>
                <div>
                    <Image className='pointer-events-none' src="../../../public/greeting_bg.png" alt="CarouselPhoto" preview={false} />
                </div>
            </Carousel>
        </div>
    )
}