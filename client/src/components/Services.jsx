const ServiceCard = ({ color, title, iconImage, subtitle }) => (
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl' style={{ width: '800px', height: "160px" }}>
        <div className={`rounded-full flex justify-center items-center ${color} service-card-icon`} 
            style={{ backgroundImage: `url(${iconImage})` }}>            
        </div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='mt-2 text-white text-lg '>{title}</h1>
            <p className='mt-2 text-white text-sm md:w-9/12 '>{subtitle}</p>
        </div>
    </div>
);


const Services = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services' id="services">
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
                        About <br /> Us
                    </h1>
                </div>
            </div>

            <div className='flex-1 flex flex-col justify-start items-end'>
                <ServiceCard 
                    color = "bg-[#2952E3]"
                    title = "Ankit Singh"
                    iconImage="https://media.licdn.com/dms/image/D5603AQEkFrb5hgEU1g/profile-displayphoto-shrink_400_400/0/1670911124903?e=1695859200&v=beta&t=af4k-601D71HYn29KVF4wCOAMERfE6Tas6Lk6f2DAEg"
                    subtitle = "Primarily a game developer, but want to learn about every other technology possible."
                />

                <ServiceCard 
                    color = "bg-[#8945F8]"
                    title = "Laksh Dilliwal"
                    iconImage = "https://media.licdn.com/dms/image/D4D03AQGxbIqjFmao0g/profile-displayphoto-shrink_400_400/0/1689160978814?e=1695859200&v=beta&t=4hpoZco8YiX55_7EzpP5UWCHfa28s-0_NhccyIV4IiM"
                    subtitle = "A Web3, Blockchain, and Computer Science Enthusiast."
                />

            </div>

        </div>
    );
}

export default Services;