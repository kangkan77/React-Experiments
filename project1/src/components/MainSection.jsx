import LeftSection from './LeftSection'
import RightSection from './RightSection'

export const MainSection = () => {
    return (
        <div className='w-full h-[80%] mt-10 bg-green-00 flex gap-10'>
        
        <LeftSection />
        <RightSection />

        </div>
    )
}
