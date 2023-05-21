import { FormEvent, useContext, useState } from "react";
import Month from "./Month";
import GlobalContext from "../../context";
import Modal from "../Modal";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";

const dayInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface IFormInput {
  title: string;
  time: string;
}

const Calendar = () => {
  const { dayOfCalendar, eventStore, setEventStore, isShowCreateModal, setIsShowCreateModal } =
    useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const isDuplicate = eventStore.find(event => event.title === data.title);

    if (isDuplicate) {
      setError("title", {
        type: "duplicate",
        message: "This title is exist",
      });
      return;
    }

    setEventStore([
      ...eventStore,
      {
        title: data.title,
        start_date: moment(data.time).format("YYYY-MM-DD"),
        end_date: moment(data.time).format("YYYY-MM-DD"),
        label: "blue",
      },
    ]);
    setIsShowCreateModal(false);
  };

  return (
    <div className="container">
      <div className="calendar">
        <div className="calendar-header">
          {dayInWeek.map((day, index) => {
            return (
              <div className="calendar-header-item" key={index}>
                <p>{day}</p>
              </div>
            );
          })}
        </div>

        <Month dayOfCalendar={dayOfCalendar} />

        <Modal title="Create an event" open={isShowCreateModal}>
          <div className="event-modal">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Title"
                placeholder="Type your event"
                {...register("title", {
                  required: { value: true, message: "This field is required" },
                })}
                error={errors.title}
              />

              <Input
                type="datetime-local"
                label="Time"
                {...register("time", {
                  required: { value: true, message: "This field is required" },
                })}
                error={errors.time}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Calendar;
