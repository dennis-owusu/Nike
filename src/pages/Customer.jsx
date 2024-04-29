/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Carousel } from 'flowbite-react'

const Customer = () => {
  return (
    <>
    <div className="h-[40rem] mx-20">
    <Carousel indicators={false}>
      <img className='object-cover' src="https://img.freepik.com/free-photo/black-man-posing_23-2148171648.jpg?t=st=1713990538~exp=1713994138~hmac=c76ff8bed3a8aff0d96132eb9d2f568779e0aba6839284d4f2d18020ad067207&w=1060" alt="..." />
      <img className='object-cover' src="https://img.freepik.com/free-photo/beautiful-welldressed-afro-american-woman-customer-with-colored-shopping-bags-mall_627829-1468.jpg?t=st=1713990516~exp=1713994116~hmac=f2d02e4061a3cf4271c9f0bfcf8059a0f5a436342597e94047afaf3535b29eed&w=996" alt="..." />
      <img className='object-cover' src="https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg?t=st=1713990651~exp=1713994251~hmac=d45bf9e1d9f005c4137c49df6c9f5a55d174c51557dd2d38a6556280fdd9bcef&w=1060" alt="..." />
      <img className='object-cover' src="https://img.freepik.com/free-photo/student-guy-white-polo-shirt-yellow-cap-wearing-glasses-with-backpack-holding-notebook-pointing-with-index-finger-camera-being-surprised_141793-108770.jpg?t=st=1713990690~exp=1713994290~hmac=4e9f291a7f0af1a9e2eda7a2d53a8404b5c935a5b964a327fc6927aae0136c5e&w=900" alt="..." />
      <img className='object-cover' src="https://image.shutterstock.com/image-photo/full-length-profile-photo-handsome-260nw-1770422912.jpg" alt="..." />
      <img className='object-cover' src="https://s3-alpha-sig.figma.com/img/099f/dd2e/e28191fea127fa753b8333db45464fd9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRYjEDuUjdEXnhRm0utpXgXhlliZdirUUgF25wlX7OQlrVJC4r3pPoCVodZQUasVMiUExiV4XKA5aXxur94WveDg8SnbKiqvnDDpxqFGf7v-GlHzSlWwfATDug6XapbfYwfFLvFgekmr6S0NTFNbNLZk42fAXTFwhvkDCZFVJmF11BxgN3Mli3y0znGkk6AWv9t0quzEYT~mV6JMdPBxoIZqqe8mVrSo15ChMKhZucx8cs-YTBQ6pXwe7A9NAbBHp7oBxB1DwoF2Y9cgb7Zxx-pKW6uCJdiaWJHg~Z8cZFxzs3Sn4SWO2P14qTReZGeotXl8YqQtNYRc1PxWcqK~QA__" alt="..." />
    </Carousel>
  </div>
  <div className='mx-40 my-16 text-lg'>
    <p>In a bustling metropolis, Adam and Lily, two young talents with a shared love for sneakers, crossed paths. Adam, renowned for his bold designs, and Lily, an innovative materials engineer, bonded over their shared vision: to create sneakers that merged style and functionality.
Together, they embarked on a journey of collaboration and creativity. Through countless brainstorming sessions and late nights in their studio, they refined their ideas, blending Adam's design flair with Lily's technical expertise.
Their dedication paid off when they unveiled their creation: a pair of sneakers that defied convention. Sleek yet sturdy, stylish yet comfortable, their shoes bore the marks of their passion and dedication.
With pride, Adam and Lily signed their names on each pair, marking the beginning of a new chapter in sneaker innovation.</p>
<div className='brand-large text-center my-10 text-5xl tracking-wider'>
    <h1>Adam & Lily</h1>
</div>
<p className='mt-10'>Modesty Collections</p>
  </div>
  </>
  )
}

export default Customer