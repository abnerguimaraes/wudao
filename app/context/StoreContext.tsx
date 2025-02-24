"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { usePathname } from "next/navigation";

type State = {
  activeRoute: string;
  user: { id: string; name: string } | null;
};

type Action =
  | { type: "SET_ROUTE"; payload: string }
  | { type: "SET_USER"; payload: { id: string; name: string } | null };

const initialState: State = {
  activeRoute: "",
  user: null,
};

const StoreContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ROUTE":
      return { ...state, activeRoute: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [state, dispatch] = useReducer(reducer, { ...initialState, activeRoute: pathname });

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
}
