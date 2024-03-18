import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import CardBooking from "@/components/molecules/card/card-booking";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookingSectionProps {
  id: string;
}

function BookingSection({ id }: BookingSectionProps) {
  return (
    <div className="w-full max-w-[360px] xl:max-w-[400px] h-fit space-y-5 bg-white border border-border rounded-[20px] p-[30px] shadow-indicator">
      <h1 className="font-bold text-lg leading-[27px] text-secondary">
        Start Booking
      </h1>
      <span className="leading-6">
        <span className="font-bold text-4xl leading-[54px]">$18,390</span>
        /day
      </span>
      <div className="space-y-5">
        <DatePickerDemo />
        <DatePickerDemo />
      </div>
      <div className="space-y-5">
        <CardBooking title="Total days" value="30 days" />
        <CardBooking title="Sub total" value="$83,422" />
        <CardBooking title="Tax (10%)" value="$23,399" />
        <CardBooking title="Insurance" value="$7,492" />
        <CardBooking title="Grand total price" value="$103,940" />
      </div>
      <Link href={`/listing/${id}/checkout`}>
        <Button variant="default" className="mt-4">
          Book Now
        </Button>
      </Link>
      <div className="bg-gray-light p-5 rounded-[20px] flex items-center space-x-4">
        <Image src="/icons/medal-star.svg" alt="icon" height={36} width={36} />
        <div>
          <Title
            section="booking"
            title="77% Off Discount"
            subtitle="BuildWithAngga card is giving you extra priviledge today."
          />
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
