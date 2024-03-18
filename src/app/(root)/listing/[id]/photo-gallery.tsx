import { Button } from "@/components/atomics/button";
import Image from "next/image";
import React from "react";

function PhotoGallery() {
  return (
    <div className="mt-[30px] grid grid-cols-3 xl:grid-cols-4 gap-x-5">
      <div className="col-span-2 xl:col-span-3 relative">
        <Image
          src="/images/image-detail-1.svg"
          alt="image-1"
          height={0}
          width={0}
          className="w-full h-[520px] rounded-[30px] object-cover"
        />

        <div className="absolute bottom-[30px] right-[30px]">
          <Button className="flex" variant="third">
            <Image
              src="/icons/direct-right.svg"
              alt="direct-right"
              height={24}
              width={24}
              className="mr-2.5"
            />
            Start Virtual Tour
          </Button>
        </div>
      </div>
      <div className="space-y-5">
        <Image
          src="/images/image-detail-2.svg"
          alt="image-2"
          height={0}
          width={0}
          className="w-full h-[160px] rounded-[20px] object-cover"
        />
        <Image
          src="/images/image-detail-3.svg"
          alt="image-3"
          height={0}
          width={0}
          className="w-full h-[160px] rounded-[20px] object-cover"
        />
        <Image
          src="/images/image-detail-4.svg"
          alt="image-4"
          height={0}
          width={0}
          className="w-full h-[160px] rounded-[20px] object-cover"
        />
      </div>
    </div>
  );
}

export default PhotoGallery;
