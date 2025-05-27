"use client";


import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
    activeTab: string;
    setActiveTab: (key: string) => void;
    type?: 'click' | 'hover';
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = (): TabsContextType => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider');
    }
    return context;
};

interface TabsProviderProps {
    defaultTab: string;
    children: ReactNode;
    type?: 'click' | 'hover';

}

const TabsProvider: React.FC<TabsProviderProps> = ({
    defaultTab,
    children,
    type = 'click',
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, type }}>
            {children}
        </TabsContext.Provider>
    );
};

interface TabListProps {
    children: ReactNode;
}

const TabList: React.FC<TabListProps> = ({ children }) => {
    return <div>{children}</div>;
};

interface TabItemProps {
    tabKey: string;
    children: ReactNode;
}

const TabItem: React.FC<TabItemProps> = ({ tabKey, children }) => {
    const { activeTab, setActiveTab, type } = useTabs();
    const isActive = activeTab === tabKey;

    const handleSelect = () => setActiveTab(tabKey);

    return (
        <button
            onClick={type === 'click' ? handleSelect : undefined}
            onMouseEnter={type === 'hover' ? handleSelect : undefined}
            className={`block w-full text-left transition-all ${isActive
                ? 'bg-secondary text-primary font-semibold'
                : 'bg-white hover:bg-gray-200 text-gray-800'
                }`}
        >
            {children}
        </button>
    );
};



interface TabContentProps {
    children: React.ReactElement | React.ReactElement[];
}

const TabContent: React.FC<TabContentProps> = ({ children }) => {
    const { activeTab } = useTabs();

    // Chuyển về mảng để dễ xử lý
    const panes = React.Children.toArray(children) as React.ReactElement[];

    // Tìm pane có props.tabKey === activeTab
    const currentPane = panes.find(
        (child) => {
            // Ép kiểu cho child.props
            const props = child.props as { tabKey?: string };
            return props.tabKey === activeTab;
        }
    );

    return <div>{currentPane || null}</div>;
};

interface TabPanelProps {
    tabKey: string;
    children: ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
    return <>{children}</>;
};


export {
    TabsProvider,
    TabList,
    TabItem,
    TabContent,
    TabPanel,
    useTabs
}