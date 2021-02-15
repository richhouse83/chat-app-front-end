import React from "react";
import { Link } from "@reach/router";

export default function InputMessage() {
  return (
    <section className="input-message">
      <form>
        <textarea name="message" id="message" cols="30" rows="5"></textarea>
        <Link to="/settings">Settings</Link>
        <button onClick={(event) => event.preventDefault()}>
          Send Message
        </button>
      </form>
    </section>
  );
}
