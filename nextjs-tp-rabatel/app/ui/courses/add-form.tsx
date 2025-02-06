"use client";

import { CustomerField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { addCourse, State } from "@/app/lib/action";
import { useActionState } from "react";
import { addNewCourses } from "@/app/lib/action";
import { useForm } from "react-hook-form";

type user = {
  id: string;
  name: string;
  role: string;
  email: string;
};

export default function Form({ users }: { users: user[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      instrument: "",
      teacherId: "",
      level: "",
      schedule: "",
      capacity: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await addNewCourses(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            {...register("title", {
              required: {
                value: true,
                message: "Titre requis",
              },
            })}
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.title && (
            <p className="text-xs mt-1 text-red-600">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "description requis",
              },
            })}
            name="description"
            id="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.description && (
            <p className="text-xs mt-1 text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="instrument"
            className="block text-sm font-medium text-gray-700"
          >
            Instrument
          </label>
          <input
            {...register("instrument", {
              required: {
                value: true,
                message: "instrument requis",
              },
            })}
            type="text"
            name="instrument"
            id="instrument"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.instrument && (
            <p className="text-xs mt-1 text-red-600">
              {errors.instrument.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="teacherId"
            className="block text-sm font-medium text-gray-700"
          >
            Teacher
          </label>
          <select
            {...register("teacherId", {
              required: {
                value: true,
                message: "teacher requis",
              },
            })}
            name="teacherId"
            id="teacherId"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select a teacher</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {errors.teacherId && (
            <p className="text-xs mt-1 text-red-600">
              {errors.teacherId.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700"
          >
            Level
          </label>
          <input
            {...register("level", {
              required: {
                value: true,
                message: "level requis",
              },
            })}
            type="text"
            name="level"
            id="level"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.level && (
            <p className="text-xs mt-1 text-red-600">{errors.level.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="schedule"
            className="block text-sm font-medium text-gray-700"
          >
            Schedule
          </label>
          <input
            {...register("schedule", {
              required: {
                value: true,
                message: "schedule requis",
              },
            })}
            type="text"
            name="schedule"
            id="schedule"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {errors.schedule && (
          <p className="text-xs mt-1 text-red-600">{errors.schedule.message}</p>
        )}
        <div className="mb-4">
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacity
          </label>
          <input
            {...register("capacity", {
              required: {
                value: true,
                message: "capacity requis",
              },
            })}
            type="number"
            name="capacity"
            id="capacity"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {errors.capacity && (
          <p className="text-xs mt-1 text-red-600">{errors.capacity.message}</p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
