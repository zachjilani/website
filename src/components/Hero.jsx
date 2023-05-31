import { motion } from 'framer-motion';
import { styles} from '../styles';
import { CoffeeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>
        <div className='flex flex-col justify-center
        items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]'/>
          <div className='w-1 sm:h-80 h-40 black-white-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hey!</h1>
          <p className={`${styles.heroSubText}`}>
            Welcome to the site!
          </p>
        </div>
      </div>
      <CoffeeCanvas />
      <div className='absolute xs:bottom-10 bottom-32
      w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[28px] h-[60px] rounded-3xl
          border-2 border-secondary flex justify-center
          items-start p2'>
            <motion.div
            animate={{
              y: [0, 39.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full
            bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero