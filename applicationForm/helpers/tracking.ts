declare global {
  interface Window {
    dataLayer: object[];
    ga: (
      type: string,
      event: string,
      action: string,
      category: string | undefined,
      label: string | undefined,
      value: number | undefined,
      options: { nonInteraction: boolean }
    ) => void;
  }
}

export interface IGaSendEvent {
  action: string;
  category: string | undefined;
  label: string | undefined;
  value?: number | undefined;
  interactive?: boolean;
}

export const gaSendEvent = ({
  action,
  category = undefined,
  label = undefined,
  value = undefined,
  interactive = false,
}: IGaSendEvent) => {
  if (typeof window?.ga === "function") {
    window.ga("send", "event", action, category, label, value, {
      nonInteraction: !interactive,
    });
  }
};
