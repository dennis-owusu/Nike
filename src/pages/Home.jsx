import { Button, Card, Carousel } from "flowbite-react"
import { SiNike, SiJordan,SiNewbalance } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
 const Home = () => {
 

    return (
        <>
        <div className=" max-w-full h-[30rem] gap-4 mx-20 relative">
        <Carousel indicators={false}>
        <img className="w-full" style={{height:'50rem'}} src="https://s3-alpha-sig.figma.com/img/dbe3/c562/614613a6f6754763696dabed7cec2bcf?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FlgHW-rOdQpljvy6ywqMCgm7rUdos-PbyvZVMua0bclwfU0b7E~l-0N~~hWFGugPLOyYEdGmlurxjy2wq95ncmmyEHIh0NDsNegoVKJFDvlYqYkjFlchcipLvg6KkzX4Hpn-yZ7IGkVtYD0y4vrYD8D4JuAwZgTsg3XMyQd4cnepMEBL~RJCMjVhSr~TuQbbnBIJc3MmU~hcRAIjUsvsbuuV404IeIcdlmNbtT7dH~m1ul3NicLce5e2ZoXgXPKn4-w4ve32JdaEutt-C99ZaV6OnKujSlW6bZVdkryGShJDzgiWhA8mRSQmcVlwafh3xXGvQU6wM5UZ7AaY-0xfdg__" alt="..." />
        <img className="w-full" style={{height:'50rem'}} src="https://i.pinimg.com/474x/a0/ad/f7/a0adf7d44be4fe48595ebbfce69d8e76.jpg" alt="..." />
        <img className="w-full" style={{height:'50rem'}} src="https://i.pinimg.com/474x/1f/9d/ca/1f9dcac4e16c4b2582b43f70cfb0f630.jpg" alt="..." />
        <img className="w-full" style={{height:'50rem'}} src="https://i.pinimg.com/474x/0f/a7/88/0fa788b8982a2c0de73e3a655cac0e10.jpg" alt="..." />
        <img className="w-full" style={{height:'50rem'}} src="https://i.pinimg.com/474x/28/d8/a9/28d8a928c5353af0330cfc6ce1790809.jpg" alt="..." />
      </Carousel>
      <div className="absolute top-96 left-11">
      <Button outline className="text-xl font-bold">GET STARTED</Button>
      </div>
        </div>
        <div className="bg-black text-white mx-20 my-7 pb-8 items-center rounded-3xl flex-col justify-center flex  space-y-10">
           <div className="pt-16">
           <h1 className="text-3xl font-bold brand text-center text md:tracking-widest md:leading-10 md:space-x-9">All Your Favorite Brands In One Place</h1>
            <p className="font-md text-lg text-center">from classic favorite to the latest trends</p>
           </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-20">
                <SiNike className="w-32 h-32 justify-center"/>
                <CgAdidas className="w-32 h-32 justify-center"/>
                <SiNewbalance className="w-32 h-32 justify-center"/>
                <img className="w-32 h-32 justify-center" src="https://s3-alpha-sig.figma.com/img/1cf4/4cc5/aa64dda3f1080b3c644c9c78cce062fa?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFYuqU~aUnOZ34ZJ9i8gF~mLtunN9NNRUmSNcBnegMAQUITb1BhHWNICf5yuD2i8vJl2Q-rHk5jueF38aHUfh37OHb4XywvRJxryQwh9pfFC-hEM8BZGuCHMvQOTzSE8gzK4fayIxSGSFXuyK2MagQ~QhREw2IonOOEYj5tGHrVFEGLFSBqRvM8CSK~49e9bzW0t3aY004j5AEVACYHPwCPhLPVnOZ4W~Dh0bBkgmucWIEREPvadcFUWqhC-I5W8sSdVtIiqRG88cHLOoGAaJ61qXZtZVDwBkXPJ2lkJdoZvAXa8SgUzmDJsj~~e0Kl-VHkQ0~Fa0qVd3d4MHE2a~Q__"/>
                <SiJordan className="w-32 h-32 justify-center"/>
            </div>
        </div>
        <div className="my-20 mx-20">
            <h1 className="brand-text ml-20">Explore Through Our Collections</h1>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
    <div className="relative">
    <Card className=" max-w-sm bg-gray-100 pb-8" horizontal>
     <div className="relative">
        <p className="absolute text-white bg-black rounded-xl text-sm px-5 py-2">Top Sellers</p>
     <img className=" w-72 h-72" src="https://s3-alpha-sig.figma.com/img/656b/27c7/beae09568418ec8d970db88c92c76cc3?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tl5PJIQnl21eiCJt0gzEv5ljypDLITNs7EskIfETTstby1H0Qx2rd062iCDLGEaJM7~H3dlmbXWEwgFs6EJLfZV13OKvHPz6~ZWkPDNG5ShaIJAuMWPA5QufFvng1HE4qp-k5bJc21lGh0JIBVToPmOE2Qe00~xz9XUB9n1h1avGCULA4D8yIPKGSwggeoMdyx-f~n3LCLd1KTTuTpn5ZZjzhe403hBGyL76wT10VbAJqqCiqWgZeZLlxvwgIqpRnhn6vqGxfKDDsKWEvQYXa~yDtSi~3vHm04~uS0f2eEAlNIjQlKEgXdeqmPfiGz8awXW-T6XqVNFcfIpVKczgkg__"/>
      <div className="absolute top-48 left-20 rounded-3xl shadow-inner  inset-x-0 bottom-0 h-5 mt-9 "></div>
     </div>
      <div className="flex gap-20 items-center">
      <h1 className="font-semibold text-2xl">Nike Joyride</h1>
      <div>
        <p>Price</p>
        <p className="text-3xl font-bold">$650</p>
      </div>
      </div>
    </Card>
    </div>
    <Card className="max-w-sm bg-gray-100" horizontal>
      <div className="relative">
     <img className=" w-72 h-72" src="https://s3-alpha-sig.figma.com/img/0afc/912b/ef7cbd4b712c699ef8fe5dd0d64002aa?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltmyhF7Ke~-DNbQmr64TUOktGvYL6QUMUmlLwkpT6B-3~izuMTvFjfkud5gtxiD9bgHHa~VA7P5DfaCObQfEJwBn5DXCSz9p0QKpdU3KE7SlbVr5l4jwTb7DtHgL7jWzUTs0o1spwTwSfqrqXxmI-OIBeYYr~P-zorOR8PDTwRDRsX~QixvrE9AUyQsNrHB2JuWYlr4I6-42U2EsCzIUTg66FsquZ25sxOA2zokOIcS2U0hvx4bdKIvExJ9FDh4YbPdmQEOIcNrVdzlqEObiogB1d1bLxwht7ZMbySP0KvqJMbDXSNPDZANJDTkiZDeO8qi0pD7NxO8bW05xYIvJqg__"/>
      <div className="absolute top-48 left-20 rounded-3xl shadow-inner  inset-x-0 bottom-0 h-5 mt-9 "></div>
     </div>
      <div className="flex gap-20 items-center">
      <h1 className="font-semibold text-2xl">Nike Joyride</h1>
      <div>
        <p>Price</p>
        <p className="text-3xl font-bold">$650</p>
      </div>
      </div>
    </Card>
    <Card className="max-w-sm bg-gray-100" horizontal>
      <div className="relative">
     <img className=" w-80 h-80" src="https://s3-alpha-sig.figma.com/img/b18b/0be1/a0f392126c54c25c7801242651ca7270?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ji-lerjZAsZxGMK9QNxJGjzmnmLy8wYAMME7pew9Klgvm6RdHRMLqejp~OsYQbod6SkA0BWnmkoPAue1wqRxxxn6W87XeEGc-iM0jkZkbXy5NSs~vH5aVJG80lbwPAUrp~xwhSwbOP6poUeM138H8y93cKp4WAgG2AU6x2~PHbYUH~-minf6C~R2INksK1r5riH1pyT75ORXH5k-mk5UqqiQ-DuFeD6NxgNCc9lD26zmB2Z2buVbtdGWhopw865rBBgBQCasz56Bk-tXiqFBasjchtp6pSMubheWR55FK0MnFKs4iJ9CkSc4BJuUFprf1uj~64AzYD~mgI6Ro6Neng__"/>
      <div className="absolute top-48 left-20 rounded-3xl shadow-inner  inset-x-0 bottom-0 h-5 mt-9 "></div>
     </div>
      <div className="flex gap-20 items-center">
      <h1 className="font-semibold text-2xl">Nike Joyride</h1>
      <div>
        <p>Price</p>
        <p className="text-3xl font-bold">$650</p>
      </div>
      </div>
    </Card>
            </div>
        </div>
        </>
    )
}
        
export default Home