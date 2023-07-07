import Gambar2 from "../Assets/chart.png";
import { ShakeSlow } from "reshake";
import Collapse from '@mui/material/Collapse';
import React from "react";

const Content3 = () => {
    const [checked, setChecked] = React.useState(false);

    const startAnimation=()=>{

        if((window.scrollY)>(3*window.innerHeight)-150){
            setChecked(true);
        }else{
            setChecked(false);
        }
    }
    React.useEffect(()=>{
        window.addEventListener("scroll", startAnimation)
    },[])

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative">
                <ShakeSlow>
                    <img
                        className="w-[300px] sm:w-[550px] md:w-[700px] lg:w-[900px] max-w-[1000px] mx-auto my-4 "
                        src={Gambar2}
                        alt="/"
                    />
                </ShakeSlow>
            </div>
            <div className="absolute text-2xl mt-[-300px] ml-0 sm:ml-[-300px] sm:mt-0 md:text-3xl md:ml-[-380px] md:mt-[30px] lg:ml-[-500px] font-bold lg:text-5xl font-serif text-[#0A415E]">
                <Collapse in={checked}>
                    <p>Kematian</p>
                </Collapse>
                <Collapse in={checked}>
                    <p>Akibat Udara Buruk</p>
                </Collapse>
                <Collapse in={checked}>
                    <p className="text-xs sm:text-[10px] md:text-xs lg:text-base font-semibold">Kualitas udara yang buruk dapat menyebabkan berbagai <br/> macam penyakit pernafasan sehingga mengancam manusia.</p>
                </Collapse>
            </div>
        </div>
    );
};

export default Content3;
