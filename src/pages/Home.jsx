import React from "react";
import { PageDisplay } from "../components/layouts";
import { home } from "../assets";

function Home() {
    return (
        <PageDisplay>
            <div className="grid h-[90vh] place-content-center  md:relative">
                <div className="hidden md:block md:absolute w-[19rem] bg-active-link left-0 top-0 p-4 rounded-br-3xl ">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta culpa qui optio beatae enim eligendi unde fugit labore aliquam. Nihil architecto blanditiis nostrum illum. Quidem suscipit eos tempore perspiciatis, ipsa soluta mollitia, esse explicabo deserunt itaque placeat voluptatem eum rem culpa. Porro  lauentore. Consequuntur laborum nihil aliquam necessitatibus similique? Fuga magnam voluptatem excepturi necessitatibus nobis explicabo, id quam eum nulla!
                    </p>
                    <div className="w-full h-[10rem] bg-bg mb-4">
                        
                    </div>
                </div>

                <div className="w-full md:w-[65rem] ">
                    <img src={home} alt="img" />
                </div>
            </div>

            {/* <SectionContent backgroundSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb">
                <div>
                    <h2 className="mb-4 text-4xl font-bold text-blue-800">
                        section 1
                    </h2>
                    <p className="text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consect{" "}
                    </p>
                </div>
            </SectionContent> */}
        </PageDisplay>
    );
}

export default Home;
