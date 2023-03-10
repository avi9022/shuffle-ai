import { FunctionComponent } from "react";
interface NotificationProps {
  content: string;
  visible: boolean;
}
export const Notification: FunctionComponent<NotificationProps> = ({
  content,
  visible,
}) => {
  return (
    <div
      className="alert alert-success fade show mt-3"
      role="alert"
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      {content}
    </div>
  );
};
