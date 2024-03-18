import CardFacility from "@/components/molecules/card/card-facility";
import Image from "next/image";
import React from "react";

function Listing() {
  return (
    <div className="w-full max-w-[460px] h-fit p-[30px] space-y-5 bg-white rounded-[30px] shadow-indicator border border-border">
      <Image
        src="/images/image-detail-1.svg"
        alt="image-1"
        height={0}
        width={0}
        className="w-full h-[220px] rounded-[30px]"
      />
      <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
        Tedjamudita Buxiang Parahyangan
      </h1>
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/location-dark.svg"
              alt="location-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            Shanghai, China
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/format-square-dark.svg"
              alt="format-square-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            18,209 sqft
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/profile-2user-dark.svg"
              alt="profile-2user-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            3 people
          </div>
          <div className="flex items-center font-semibold leading-6">
            <Image
              src="/icons/wifi-dark.svg"
              alt="wifi-dark"
              height={0}
              width={0}
              className="w-5 h-5 mr-1"
            />
            10 gbps
          </div>
        </div>
      </div>
      <div className="space-y-3.5">
        <CardFacility
          icon="/icons/security.svg"
          title="24/7 Supports"
          subtitle="Best People"
        />
        <CardFacility
          icon="/icons/weight.svg"
          title="Gym Space"
          subtitle="Complete"
        />
        <CardFacility
          icon="/icons/coffee.svg"
          title="Mini Cafe"
          subtitle="Western"
        />
        <CardFacility
          icon="/icons/video-play.svg"
          title="Cinema"
          subtitle="All Movies Included"
        />
      </div>
    </div>
  );
}

export default Listing;
