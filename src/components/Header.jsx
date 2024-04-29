import React from 'react'
import { Navbar, NavbarCollapse, NavbarLink } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../index.css'
const Header = () => {

  const path = useLocation().pathname
  const navigate = useNavigate()
  return (
    <Navbar className='border-2' style={{maxWidth:'100%'}}>
        <Link to='/'>
      <div className='flex gap-1'>
        <img className='w-5 h-5 mt-3' src='https://s3-alpha-sig.figma.com/img/d08e/7d15/4c5b06ebefee2a7fcc5e36ba1363b754?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVJX4pW3S6z8YBoCukzlUCxiQy2JMRJdrX2UvHtFCaAs1nq07FvJUVFOJVo3Fp-rosL6KqE56xFcwC~sfhZHbFiGuO~0zxLALuosLHqbU~fuv6Xwg4FRULiQfPlfNnAGDMP4TKo9vBsCPwQclvqRA-3c~xZioM6lHHwJNyEVcCbIaePKAO2PfY9eWbUXxwL1~vRZxblAo6Irrtv7-skUnnw9kgptLJXV6bR8dOyU6vHrCbkA1qZA6Gm6qoWScEZJvZA5vUSM~l2~OuVR1FmkEQPb22ecSZ2yMBQABAnARNWuPEQtVayY1E-BpTssWCmEA287LAXDyMQKBMvRP51AhQ__'/>
       <div>
       <h1 className='brand font-bold'>MODESTY</h1>
        <p className='collection'>COLLECTIONS</p>
       </div>
      </div>
        </Link>
       <div className='md:hidden'>
       <div className='flex gap-6 items-center md:hidden'>
       <button onClick={()=>navigate('/shop')} className='w-40 rounded-3xl bg-black text-white border-2 border-black h-9 hidden md:block'>Shop Now</button>
        <Link to='/customer' className='font-semibold text-md hidden md:block'>
          Customer Care
        </Link>
        <div className='flex gap-6'>
       </div>
          <img className='w-5 h-5 hidden md:block' src='https://s3-alpha-sig.figma.com/img/1624/5005/88f6da491744aba1ad9ac9368f3689d9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqJzGaTHnmDxcpGiew2RFD3vUIaMnBrSmJk0SxOeDfmUy0ac8e4SnnZDpdwEfe98aNnFrCy2DK7MrOaKuaqqmbUEMf9hDudVtGriSTiuLyPMrudLB2ZkrC2tLvY4r1sFe9WTUnlkdkjZ6Eutiw~9A9nabWU2-Mqnq3gaYOh3bwRWogwW-51~-KXYe3LueU7Q2dC1rRO34hjf7P84E1RZEMQivDLL~3KzUKOeIXlfLI84PBJansjJFzHyZ5e9DnpB9skFhUTn~5Bpi8pYxzOXSa7b3JYpcx0kDct9ocDLErWcuwws3hBTGG4pgmRvAUkvOc9~5DNEf3ss4IQrwqKYIQ__'/>
          <p className='line h-6 hidden md:inline'></p>
          <img className='w-5 h-5 hidden md:block' src='https://s3-alpha-sig.figma.com/img/32d7/7c92/83bc09c222406a109a05f3fd84975631?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JrJ33glnsZ-MHk0nD-bnP0gZrh0TNBsS~JKel6wAOUaWoAdniHiSA4cpHDGKqTBcjXWzroqB2iEgh5d6JgzX-ndxQmyFEWHwW8x1Wk7zn4bWOLiIPJKjicYfN4bzpNAOH0Eoo5V3jOku-2znzSRpbZAwMCA3wqkW-zWx-lCQCJ0JKQQxgwTPPal9ENjFjQl7EtR4BxEaCXtsMbbAnFxkjoApugOyOxb74lKdJPfPKVzRGlKboXNaw6n6L-4ZHNw2DvXWlM7s-4DVzR4NTxL-CF8pKxh1HQQI1tJeUDvCEM6-S1DmJCv~5MrEdet0iDFoZiK5q-i3tqgwzSIE9rg2XQ__'/>
        </div>
       </div>
        <Navbar.Toggle/>
      <NavbarCollapse className='cursor-pointer'>
          <NavbarLink className='font-semibold text-lg' active={path === '/'}  as={'div'}>
           <Link to='/'>
           Home
           </Link>
          </NavbarLink>
          <NavbarLink className='font-semibold text-lg'  as={'div'}>
            <Link to='/sales'>
            Sales
            </Link>
          </NavbarLink>
          <NavbarLink className='font-semibold text-lg'  as={'div'}>
           <Link to='/new'>
           New Releases
           </Link>
          </NavbarLink>
          <NavbarLink className='font-semibold text-lg' active={path === '/gallery'}  as={'div'}>
            <Link to='/gallery'>
            Gallery
            </Link>
          </NavbarLink>
          <NavbarLink className='font-semibold text-lg'  as={'div'}>
            <Link to='/collections'>
            Collections
            </Link>
          </NavbarLink>
        </NavbarCollapse>
        <div className='hidden lg:inline'>
       <div className='flex gap-6 items-center'>
       <button className='w-40 rounded-3xl bg-black text-white border-2 border-black h-9 hidden md:block'>Shop Now</button>
        <Link to='/customer' className='font-semibold text-md hidden md:block'>
          Customer Care
        </Link>
        <div className='flex gap-6'>
       </div>
          <img className='w-5 h-5 hidden md:block' src='https://s3-alpha-sig.figma.com/img/1624/5005/88f6da491744aba1ad9ac9368f3689d9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QqJzGaTHnmDxcpGiew2RFD3vUIaMnBrSmJk0SxOeDfmUy0ac8e4SnnZDpdwEfe98aNnFrCy2DK7MrOaKuaqqmbUEMf9hDudVtGriSTiuLyPMrudLB2ZkrC2tLvY4r1sFe9WTUnlkdkjZ6Eutiw~9A9nabWU2-Mqnq3gaYOh3bwRWogwW-51~-KXYe3LueU7Q2dC1rRO34hjf7P84E1RZEMQivDLL~3KzUKOeIXlfLI84PBJansjJFzHyZ5e9DnpB9skFhUTn~5Bpi8pYxzOXSa7b3JYpcx0kDct9ocDLErWcuwws3hBTGG4pgmRvAUkvOc9~5DNEf3ss4IQrwqKYIQ__'/>
          <p className='line h-6 hidden md:inline'></p>
          <img className='w-5 h-5 hidden md:block' src='https://s3-alpha-sig.figma.com/img/32d7/7c92/83bc09c222406a109a05f3fd84975631?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JrJ33glnsZ-MHk0nD-bnP0gZrh0TNBsS~JKel6wAOUaWoAdniHiSA4cpHDGKqTBcjXWzroqB2iEgh5d6JgzX-ndxQmyFEWHwW8x1Wk7zn4bWOLiIPJKjicYfN4bzpNAOH0Eoo5V3jOku-2znzSRpbZAwMCA3wqkW-zWx-lCQCJ0JKQQxgwTPPal9ENjFjQl7EtR4BxEaCXtsMbbAnFxkjoApugOyOxb74lKdJPfPKVzRGlKboXNaw6n6L-4ZHNw2DvXWlM7s-4DVzR4NTxL-CF8pKxh1HQQI1tJeUDvCEM6-S1DmJCv~5MrEdet0iDFoZiK5q-i3tqgwzSIE9rg2XQ__'/>
        </div>
       </div>
      
       
    </Navbar>
  )
}


export default Header