"use client";
import Breadcrumbs from "@/components/molecules/breadcrumbs";
import CardBooking from "@/components/molecules/card/card-booking";
import CardFacility from "@/components/molecules/card/card-facility";
import CardReview from "@/components/molecules/card/card-review";
import CardStar from "@/components/molecules/card/card-star";
import { Badge } from "@/components/atomics/badge";
import { Button } from "@/components/atomics/button";
import Title from "@/components/atomics/title";
import Image from "next/image";
import Map from "@/components/molecules/map";
import { DatePickerDemo } from "@/components/molecules/date-picker";
import Link from "next/link";
import ListingShowcase from "@/components/molecules/listing/listing-showcase";
import { useGetDetailListingQuery } from "@/services/listing";
import { useMemo } from "react";

function Detail({ params }: { params: { id: string } }) {
  const { data } = useGetDetailListingQuery(params.id);

  const listing = useMemo(() => data?.data, [data]);
  console.log("🚀 ~ Detail ~ listing:", listing);

  return (
    <main>
      <section
        id="overview-section"
        className="bg-gray-light pt-[170px] pb-[50px]"
      >
        <div className="px-10 xl:container xl:mx-auto">
          <Breadcrumbs />

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

          <div className="mt-[30px] grid grid-cols-3 xl:grid-cols-4 gap-x-5">
            <div className="col-span-2 xl:col-span-3 space-y-5 pr-[50px]">
              <Badge>Featured</Badge>

              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[32px] leading-[48px] text-secondary max-w-[300px]">
                  Tedjamudita Buxi Parahyangan
                </h1>

                <div className="flex flex-col items-end text-end">
                  <CardStar rating={4} variant="detail" />
                  <span className="mt-2 font-semibold leading-6 text-secondary">
                    4/5 (18,309)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-[30px]">
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
            <div className="bg-white rounded-[20px] px-5 py-4 space-y-5">
              <span className="font-bold text-lg leading-[27px]">Host</span>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/avatar-review.svg"
                  alt="avatar"
                  height={0}
                  width={0}
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div>
                  <h1 className="font-bold text-secondary">Sari Puji</h1>
                  <div className="flex items-center text-sm leading-[21px] text-subtitle">
                    <Image
                      src="/icons/clock.svg"
                      alt="clock"
                      height={18}
                      width={18}
                      className="mr-[0.5px]"
                    />
                    3 mins response
                  </div>
                </div>
              </div>
              <Button variant="third">Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-booking-section"
        className="px-10 xl:container xl:mx-auto py-[50px] flex space-x-8 xl:space-x-[80px]"
      >
        <div className="w-full max-w-[600px] xl:max-w-[650px] space-y-[30px]">
          <Title
            section="detail"
            title="About House"
            subtitle="Riverside house presents a serene and picturesque living experience, nestled along the gentle curves of a meandering river. The architecture of such a house often harmonizes with its natural surroundings, featuring expansive windows and outdoor spaces designed to offer panoramic views of the river gentle curves of a meandering river the living room with its cozy fireplace."
          />
          <div className="grid grid-cols-2 gap-5">
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
          <div>
            {/* MAPS */}
            <Map />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-[27px] text-secondary">
              From Happy Customers
            </h1>
            <div className="mt-2.5 grid grid-cols-2 gap-5">
              <CardReview
                rating={4}
                review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
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
                rating={4}
                review="I was not so sure if there was a beautiful bedroom, but it was really great experience."
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
        </div>
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
            <CardBooking title="Tax (15%)" value="$23,399" />
            <CardBooking title="Insurance" value="$7,492" />
            <CardBooking title="Grand total price" value="$103,940" />
          </div>
          <Link href={`/listing/${params.id}/checkout`}>
            <Button variant="default" className="mt-4">
              Book Now
            </Button>
          </Link>
          <div className="bg-gray-light p-5 rounded-[20px] flex items-center space-x-4">
            <Image
              src="/icons/medal-star.svg"
              alt="icon"
              height={36}
              width={36}
            />
            <div>
              <Title
                section="booking"
                title="77% Off Discount"
                subtitle="BuildWithAngga card is giving you extra priviledge today."
              />
            </div>
          </div>
        </div>
      </section>

      <ListingShowcase
        id="deals-section"
        title="Similar Places"
        subtitle="Beauty in comparison of models"
      />
    </main>
  );
}

export default Detail;
