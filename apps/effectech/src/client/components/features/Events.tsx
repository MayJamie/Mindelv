/** @format */

import type { ComponentProps } from 'react';
import { components, ui } from 'shared-client';
import type { SxProps } from 'shared-client/src/components';
import RegisterButton from '../ui/RegisterButton';

const {
    Grid,
    Box,
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
        name: string;
        link?: string;
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
        <Box component='section'>
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
                                    <Typography>
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
                                        {item.panelists.map((panelist) => {
                                            const style: SxProps = {
                                                listStyle: 'circle',
                                            };
                                            if (panelist.link) {
                                                return (
                                                    <ListItem
                                                        key={panelist.name}
                                                        sx={{ ...style }}
                                                    >
                                                        <AppLink href={panelist.link}>
                                                            {panelist.name}
                                                        </AppLink>
                                                    </ListItem>
                                                );
                                            }
                                            return (
                                                <ListItem
                                                    key={panelist.name}
                                                    sx={{ ...style }}
                                                >
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
                    <RegisterButton link={registrationLink} />
                </Timeline>
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
                <RegisterButton link={registrationLink} />
            </Container>
        </Box>
    );
};

export default Events;
