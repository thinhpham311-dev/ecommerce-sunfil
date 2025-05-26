"use client"
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

export type Tab = {
    label: string;
    content: React.ReactNode;
};

type TabsState = {
    activeIndex: number;
};

type TabsAction = {
    type: "SET_ACTIVE";
    payload: number;
};

type TabsContextType = {
    state: TabsState;
    dispatch: Dispatch<TabsAction>;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const tabsReducer = (state: TabsState, action: TabsAction): TabsState => {
    switch (action.type) {
        case "SET_ACTIVE":
            return { ...state, activeIndex: action.payload };
        default:
            return state;
    }
};

type TabsProviderProps = {
    children: ReactNode;
    defaultIndex?: number;
};

const TabsProvider = ({ children, defaultIndex = 0 }: TabsProviderProps) => {
    const [state, dispatch] = useReducer(tabsReducer, {
        activeIndex: defaultIndex,
    });

    return (
        <TabsContext.Provider value={{ state, dispatch }}>
            {children}
        </TabsContext.Provider>
    );
};

export const useTabs = (): TabsContextType => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("useTabs must be used within a TabsProvider");
    }
    return context;
};

type TabItemProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

const TabItem: React.FC<TabItemProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`py-2 px-4 font-medium ${isActive
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-black"
                }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

type TabListProps = {
    tabs: Tab[];
};

const TabList: React.FC<TabListProps> = ({ tabs }) => {
    const { state, dispatch } = useTabs();

    return (
        <div className="flex space-x-4 border-b">
            {tabs.map((tab, index) => (
                <TabItem
                    key={index}
                    label={tab.label}
                    isActive={state.activeIndex === index}
                    onClick={() => dispatch({ type: "SET_ACTIVE", payload: index })}
                />
            ))}
        </div>
    );
};

type TabPanelProps = {
    tabs: Tab[];
};

const TabPanel: React.FC<TabPanelProps> = ({ tabs }) => {
    const { state } = useTabs();

    return <div className="mt-4">{tabs[state.activeIndex]?.content}</div>;
};


export { TabsProvider, TabList, TabItem, TabPanel }