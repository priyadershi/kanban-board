import no from "./No-priority.svg";
import low from "./Img - Low Priority.svg";
import mid from "./Img - Medium Priority.svg";
import high from "./Img - High Priority.svg";
import urgentcolor from "./SVG - Urgent Priority colour.svg";
import urgentgrey from "./SVG - Urgent Priority grey.svg";
import add from "./add.svg";
import threeDot from "./3 dot menu.svg";
import display from "./Display.svg";
import backlog from "./Backlog.svg";
import done from "./Done.svg";
import cancelled from "./Cancelled.svg";
import todo from "./To-do.svg";
import down from "./down.svg";
import inprogress from "./in-progress.svg";

export const arrays = {
  status: ["Backlog", "Todo", "In Progress", "Done", "Cancelled"],
  priority: ["No Priority", "Urgent", "High", "Medium", "Low"],

  user: [],
};

export const images = {
  0: no,
  1: low,
  2: mid,
  3: high,
  4: urgentgrey,
  "No Priority": no,
  Urgent: urgentcolor,
  High: high,
  Medium: mid,
  Low: low,
  Backlog: backlog,
  Todo: todo,
  "In Progress": inprogress,
  "In progress": inprogress,
  Done: done,
  Cancelled: cancelled,
  add: add,
  threeDot: threeDot,
  down: down,
  display: display,
};
