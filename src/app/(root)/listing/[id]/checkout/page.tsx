import Image from "next/image";
import Breadcrumbs from "@/components/molecules/breadcrumbs";
import CardFacility from "@/components/molecules/card/card-facility";
import CardBooking from "@/components/molecules/card/card-booking";
import { Button } from "@/components/atomics/button";
import { Separator } from "@/components/atomics/separator";
import { Checkbox } from "@/components/atomics/checkbox";
import Title from "@/components/atomics/title";
import CardReview from "@/components/molecules/card/card-review";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Link from "next/link";

function Checkout() {
  return (
    <main>
      <section
        id="breadcrumb-section"
        className="bg-gray-light pt-[170px] pb-[178px]"
      >
        <div className="container mx-auto">
          <Breadcrumbs />
        </div>
      </section>

      <section
        id="booking-information-section"
        className="container mx-auto flex space-x-[50px] -mt-[148px]"
      >
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

        <div className="w-full max-w-[460px] pt-[50px]">
          <div>
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              Booking Informations
            </h1>
            <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
              <div className="space-y-5">
                <DatePickerDemo />
                <DatePickerDemo />
              </div>
              <div className="space-y-5">
                <CardBooking title="Total days" value="30 days" />
                <CardBooking title="Sub total" value="$83,422" />
                <CardBooking title="Tax (15%)" value="$23,399" />
                <CardBooking title="Insurance" value="$7,492" />
                <CardBooking title="Grand total price" value="$103,940" />
              </div>
            </div>
          </div>

          <div className="mt-[30px]">
            <h1 className="font-bold text-[22px] leading-[33px] text-secondary">
              Payment
            </h1>
            <div className="rounded-[30px] mt-2.5 p-[30px] bg-white border border-border shadow-indicator space-y-5">
              <div className="flex items-center space-x-3">
                <Button
                  variant="third"
                  size="button"
                  className="w-1/2 border-2 border-gray-light hover:border-primary"
                >
                  <Image
                    src="/icons/card.svg"
                    alt="card"
                    height={24}
                    width={24}
                    className="mr-2.5"
                  />
                  Transfer
                </Button>
                <Button
                  variant="third"
                  size="button"
                  className="w-1/2 border-2 border-gray-light hover:border-primary"
                >
                  <Image
                    src="/icons/visa.svg"
                    alt="visa"
                    height={0}
                    width={0}
                    className="h-full w-auto"
                  />
                </Button>
              </div>
              <CardBooking title="Bank Name" value="BuildWithAngga Fi" />
              <CardBooking title="Bank Account" value="Nidejia Listings" />
              <CardBooking title="Number" value="20193050" />
              <Separator className="bg-border" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-semibold leading-[21px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree with terms & conditions
                </label>
              </div>
              <Link href={`/booking-success/12321aa12/success`}>
                <Button variant="default" size="default" className="mt-4">
                  Make a Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="review-section" className="container mx-auto my-[100px]">
        <div className="flex justify-center text-center">
          <Title
            title="Happy Customers"
            subtitle="We’d love to come back again soon"
          />
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          <div className="space-y-[30px]">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
          <div className="space-y-[30px]">
            <CardReview
              rating={5}
              review="Price was too low yet luxury."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={5}
              review="During covid I was stayed here and I got a lot of full of supports that I need to keep my body healthy."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
          <div className="space-y-[30px]">
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="It’s just amazing, will be back."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
            <CardReview
              rating={4}
              review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
              avatar="/images/avatar-review.svg"
              username="Evelin Bie"
              jobdesk="Full-Time Traveler"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
