import RightFirstCard from './RightFirstCard'

const RightSection = () => {

    const data = [
        {
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
            content: 'Prime customers, that have access to the bank credit and are satisfied with the current product',
            button: 'Satisfied'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661777237168-3da7a9c12850?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
            content: 'Prime customers, that have access to bank credit and are not satisfied with the current service',
            button: 'Underserved'
        },
        {
            img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
            content: 'Customers from near-prime and sub-prime segments with no access to bank credit',
            button: 'Underbanked'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661775762217-eca44636f21c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
            content: 'Customers from near-prime and sub-prime segments with no access to bank credit',
            button: 'Satisfied'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661583779760-7b4532ac0cc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935',
            content: 'Customers from near-prime and sub-prime segments with no access to bank credit',
            button: 'Underserved'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661592944546-54056ba456bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
            content: 'Customers from near-prime and sub-prime segments with no access to bank credit',
            button: 'Underbanked'
        },
    ]

    return (
        <div className='h-full bg-gray-00 w-2/3 flex gap-7 overflow-auto [scrollbar-width:none] '>
        {data.map((elem,index) => {
            return <RightFirstCard index={index+1} img={elem.img} content={elem.content} button={elem.button} />
        })}    
        </div>
    )
}

export default RightSection