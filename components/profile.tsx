"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Avatar from "@/public/avatar.jpg"

import { Intro, LinkItems } from "@/app/links"

export function Profile({ intro, socials }: { intro: Intro; socials: LinkItems[] }) {
  return (
    <div className=" w-auto items-center px-8 py-12 max-[400px]:px-7 max-[360px]:px-5 lg:w-full lg:max-w-[500px] lg:px-0">
      <Image
        src={Avatar}
        alt=""
        width={160}
        height={160}
        className="size-48 rounded-full max-[400px]:size-32 max-[360px]:size-28"
        priority={true}
      />
      <h1 className="mt-8 break-words text-3xl font-semibold text-slate-950 dark:text-slate-50 lg:text-5xl">
        {intro.name}
      </h1>
      <p className="mt-6 whitespace-pre-line text-xl text-slate-600 dark:text-gray-50 max-[400px]:mt-5 max-[360px]:mt-4">
        {intro.description}
      </p>
      <div className="mt-6 flex">
        {socials.map((social, index) => {
          return (
            <Link href={social.url} target="_blank" key={index}>
              <div className="mr-2 size-10 rounded-full leading-10">
                <Image
                  src={social.icon}
                  alt={social.title}
                  width={24}
                  height={24}
                  className="size-6 rounded-full fill-amber-300 leading-10"
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
