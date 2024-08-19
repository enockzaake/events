import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(inputDate: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(inputDate);

  // Extract date components
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Extract time components
  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2); // Ensure two digits for minutes
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hour from 24-hour to 12-hour format

  return {
    date: `${dayOfWeek} ${dayOfMonth} ${month} ${year}`,
    time: `${hours}:${minutes} ${period}`,
  };
}

export function formatCurrency(amount: string | number) {
  let numberString = amount.toString();
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
