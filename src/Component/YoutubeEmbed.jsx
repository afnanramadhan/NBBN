import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
    <div className="">
        <div className="font-bold text-[#0A415E] text-2xl sm:text-3xl md:text-4xl mt-[20px] flex justify-center items-center">
            <h1>Simak video berikut</h1>
        </div>
        <div className="pb-[56.25%] relative flex justify-center items-center">
            <iframe
                // className="absolute top-[5%] left-3 w-[95%] h-[95%] max-w-[800px] max-h-[450px] lg:left-[0%]"
                className="absolute top-[5%] w-[95%] h-[95%] max-w-[800px] max-h-[450px] "
                src={`https://www.youtube.com/embed/pbrpdUiSYMY`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
