"use client";

import { useState, type FormEvent } from "react";
import { createBookingRequest } from "@/services/campers";
import type { BookingRequestPayload } from "@/types/camper";
import styles from "./BookingForm.module.css";

export function BookingForm({ camperId }: { camperId: string }) {
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const payload: BookingRequestPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      bookingDate: String(formData.get("bookingDate") ?? ""),
      comment: String(formData.get("comment") ?? ""),
    };

    try {
      await createBookingRequest(camperId, payload);
      setMessage("Booking request sent. We will contact you soon!");
      form.reset();
    } catch {
      setMessage("Unable to send your request. Please try again later.");
    }
  };

  return (
    <form className={styles.booking} onSubmit={submit}>
      <h2>Book your campervan now</h2>
      <p>Leave your contacts and we will help plan the trip.</p>

      <input name="name" placeholder="Name*" required />
      <input name="email" type="email" placeholder="Email*" required />
      <input name="bookingDate" type="date" required />
      <textarea name="comment" placeholder="Comment" />

      <button className={styles.primary}>Send request</button>
      <small aria-live="polite">{message}</small>
    </form>
  );
}
