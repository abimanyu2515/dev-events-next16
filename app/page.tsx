import { events } from "@/lib/constants"
import EventCard from "./components/ui/EventCard"
import ExploreBtn from "./components/ui/ExploreBtn"

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences. All in one place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page