import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import { useToast } from "@/components/atomics/use-toast";
import CardBooking from "@/components/molecules/card/card-booking";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import { moneyFormat } from "@/lib/utils";
import { useCheckAvailabilityMutation } from "@/services/transaction";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

interface BookingSectionProps {
  id: number;
  price: number;
}

function BookingSection({ id, price }: BookingSectionProps) {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const { toast } = useToast();
  const [checkAvailability, { isLoading }] = useCheckAvailabilityMutation();

  const booking = useMemo(() => {
    let totalDays = 0,
      subTotal = 0,
      tax = 0,
      grandTotal = 0;

    if (startDate && endDate) {
      totalDays = moment(endDate).diff(startDate, "days");
      subTotal = totalDays * price;
      tax = subTotal * 0.1;
      grandTotal = subTotal + tax;
    }

    return { totalDays, subTotal, tax, grandTotal };
  }, [startDate, endDate]);

  const handleBook = async () => {
    // `/listing/${id}/checkout`;
    try {
      const res = await checkAvailability({
        listing_id: id,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      }).unwrap();
      console.log("🚀 ~ handleBook ~ res:", res);
    } catch (error: any) {
      if (error.status === 401) {
        toast({
          title: "Something went wrong",
          description: "Please login first",
          variant: "destructive",
          action: (
            <Link href={`/sign-in?callbackUrl=${window.location.href}`}>
              Sign in
            </Link>
          ),
        });
      }
      console.log("🚀 ~ handleBook ~ error:", error);
    }
  };

  return (
    <div className="w-full max-w-[360px] xl:max-w-[400px] h-fit space-y-5 bg-white border border-border rounded-[20px] p-[30px] shadow-indicator">
      <h1 className="font-bold text-lg leading-[27px] text-secondary">
        Start Booking
      </h1>
      <span className="leading-6">
        <span className="font-bold text-4xl leading-[54px]">
          {moneyFormat.format(price)}
        </span>
        /day
      </span>
      <div className="space-y-5">
        <DatePickerDemo
          placeholder="Start date"
          date={startDate}
          setDate={setStartDate}
        />
        <DatePickerDemo
          placeholder="End date"
          date={endDate}
          setDate={setEndDate}
        />
      </div>
      <div className="space-y-5">
        <CardBooking title="Total days" value={`${booking.totalDays} days`} />
        <CardBooking
          title="Sub total"
          value={moneyFormat.format(booking.subTotal)}
        />
        <CardBooking
          title="Tax (10%)"
          value={moneyFormat.format(booking.tax)}
        />
        <CardBooking
          title="Grand total price"
          value={moneyFormat.format(booking.grandTotal)}
        />
      </div>

      <Button
        variant="default"
        className="mt-4"
        onClick={handleBook}
        disabled={!startDate || !endDate || isLoading}
      >
        Book Now
      </Button>

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
