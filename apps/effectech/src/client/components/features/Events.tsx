/** @format */

import type { ComponentProps, ReactNode } from 'react';
import { components, ui } from 'shared-client';
import RegisterButton from '../ui/RegisterButton';

const {
    Grid,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    Typography,
    Container,
    List,
    ListItem,
} = components;
const { Image, AppLink } = ui;

interface IEventItemProps {
    startTime: string | Date;
    endTime?: string | Date;
    info: string;
    panelists: {
        name: string | ReactNode;
    }[];
}
interface IEventItemsProps {
    name: string;
    registrationLink: string;
    items: IEventItemProps[];
    images: ComponentProps<typeof Image>['src'][];
}

const Events = ({ name, registrationLink, items, images }: IEventItemsProps) => {
    return (
        <div>
            <Container maxWidth='lg'>
                <Timeline
                    sx={{
                        pt: '50px',
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            width: 'min(100%, 40ch)',
                            mx: 'auto',
                            pb: '50px',
                        }}
                        variant='h2'
                    >
                        <AppLink href={registrationLink} title='Register today'>
                            {name}
                        </AppLink>
                    </Typography>
                    {items.map((item) => {
                        return (
                            <TimelineItem key={item.startTime.toString()}>
                                <TimelineOppositeContent sx={{ color: 'black.main' }}>
                                    <Typography sx={{ fontWeight: 700 }}>
                                        <>
                                            {item.startTime} to {item.endTime}
                                        </>
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ color: 'black.main' }}>
                                    <Typography>{item.info} </Typography>
                                    <List>
                                        {item.panelists.map((panelist, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <Typography>
                                                        {panelist.name}
                                                    </Typography>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                    <RegisterButton href={registrationLink} />
                </Timeline>
                {Boolean(images.length) && (
                    <>
                        <Grid
                            container
                            spacing={8}
                            sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
                        >
                            {images.map((img, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Image
                                            alt='Event image'
                                            src={img}
                                            sx={{
                                                borderRadius: '16px',
                                                width: 'min(900px, 90%)',
                                                height: 'auto',
                                                display: 'block',
                                                mx: 'auto',
                                            }}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <RegisterButton href={registrationLink} />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Events;
