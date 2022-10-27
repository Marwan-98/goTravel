import { TripEvent } from "../../types/Itineraries";
import { backgroundColor } from "./backgroundColor";
import { eventIcon } from "./eventIcon";

const DayEvents = ({ events }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`${backgroundColor(
                      event.content
                    )} h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
                  >
                    {eventIcon(event.content)}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <span className="font-medium text-gray-900">
                        {event.target}
                      </span>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayEvents;
