import React from 'react';

import {TestRoles} from "../../../test/testRoles";

import './Tooltip.scss';


type TooltipPosition = 'top' | 'bottom' | 'right' | 'left';

type TooltipProps = {
    children: React.ReactNode;
    position?: TooltipPosition;
    text?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({
                                                    children,
                                                    position = 'top',
                                                    text = '',
                                                }) => {
    return (
        <div className="tooltip" role={TestRoles.Tooltip}>
            {children}
            <span className={`tooltip-drop tooltip-${position}`}>{text}</span>
        </div>
    );
};