import React from 'react'

const Services = () => {
    const sectionStyle = {
        backgroundImage: 'url(https://i.pinimg.com/564x/53/6c/63/536c6323d439596e766f055498e775e4.jpg)',
    };
    return (
        <div>
            <section style={sectionStyle} className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <h1 className="text-5xl text-center font-bold my-8 text-white">Services</h1>
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.pinimg.com/564x/56/9d/08/569d0846a270fa455f5b2c34567d771d.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold  text-white">DATABASE MANAGEMENT</h3>
                            <p className="my-6 dark:text-gray-400 text-white text-justify">Our Database Consultancy Services encompass a wide spectrum of offerings,
                                including database performance tuning, data architecture design, database security assessment, and efficient data migration,
                                enabling your organization to harness the full potential of its data resources while ensuring scalability, security, and data integrity.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold  text-white">IT CONSULTANCY</h3>
                            <p className="my-6 dark:text-gray-400  text-white text-justify">Our IT Consultancy Services encompass a wide range of expert solutions, including
                                strategic planning, technology assessment, cybersecurity, digital transformation, and project management, all designed to provide your
                                business with tailored strategies and expert guidance, ensuring cost-efficient and successful IT initiatives that keep you at the forefront
                                of technology advancements.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.pinimg.com/564x/be/a5/50/bea55085a166a10f55a4c32559fa63bd.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold  text-white">MANAGED I.T. INFRASTRUCTURE</h3>
                            <p className="my-6 dark:text-gray-400 text-white text-justify">Catering to your organization's infrastructure needs, our Managed I.T. Infrastructure
                                services go beyond traditional IT support. We take a proactive approach, continuously monitoring and maintaining your systems, identifying
                                potential issues before they impact your operations. Our team of experts ensures that your IT environment remains secure,
                                up-to-date, and performing at its best</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.pinimg.com/736x/cf/c2/ca/cfc2ca3feb013c369be03f886fad3f63.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold  text-white">STAFF AUGMENTATION</h3>
                            <p className="my-6 dark:text-gray-400  text-white text-justify">Staff Augmentation Services provided offer a dynamic solution for businesses seeking
                                specialized talent to support their projects. With this service, you can seamlessly extend your team's expertise with professionals possessing
                                the precise skills required for your project's success. Whether you need additional software developers, project managers, or other specialists,
                                our Staff Augmentation services grant you on-demand access to top industry professionals.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.pinimg.com/564x/26/a2/42/26a242bd618fc6bca01261fef60e3fb5.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold text-white">SERVICE DELIVERY PROCESS</h3>
                            <p className="my-6 dark:text-gray-400 text-white text-justify">The Service Delivery Process is a meticulously structured sequence of steps designed to
                                provide our clients with high-quality services. It begins with a deep understanding of client needs, followed by precise service design, resource
                                allocation, and execution. Throughout this process, we maintain stringent quality control, open communication, and swift issue resolution.
                                Client feedback and evaluation are integral for continuous improvement, and we are dedicated to ensuring the highest level of service
                                quality and client satisfaction</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.pinimg.com/564x/f8/2c/77/f82c77cbb6cc0a8f8a5cdfe48f520cc4.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold text-white">SOFTWARE MAINTENANCE</h3>
                            <p className="my-6 dark:text-gray-400 text-white text-justify">Software maintenance encompasses crucial activities throughout a software's lifecycle.
                                It comprises corrective maintenance for bug fixes, adaptive maintenance for environment compatibility, and perfective maintenance to enhance
                                features. Additionally, preventive maintenance anticipates future issues. This ongoing process extends software lifespan, ensuring reliability
                                and relevance in a dynamic tech landscape, saving time and resources.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;