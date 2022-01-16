import { InvalidInputError } from "../error/InvalidInputError"

export class Show {

    constructor(
        private id: string,
        private weekDay: Weekday,
        private bandId: string,
        private startTime: number,
        private endTime: number
    ) {}

    public getId(): string {
        return this.id
    }

    public getWeekDay(): Weekday {
        return this.weekDay
    }

    public getBandId(): string {
        return this.bandId
    }

    public getStartTime(): number {
        return this.startTime
    }

    public getEndTime(): number {
        return this.endTime
    }

    public setWeekDay(weekDay: Weekday) {
        this.weekDay = weekDay
    }

    public setStartTime(startTime: number) {
        this.startTime = startTime
    }

    public setEndTime(endTime: number) {
        this.endTime = endTime
    }

    public static toWeekDayEnum(data?: any): Weekday {
        switch(data) {
            case "FRIDAY":
                return Weekday.FRIDAY
            case "SATURDAY":
                return Weekday.SATURDAY
            case "SUNDAY":
                return Weekday.SUNDAY
            default:
                throw new InvalidInputError("Invalid weekDay")
        }
    }

    public static toShow(data?: any) {
        return (data && new Show(
            data.id,
            Show.toWeekDayEnum(data.weekDay || data.week_day),
            data.bandId || data.band_id,
            data.startTime || data.start_time,
            data.endTime || data.end_time
        ))
    }
}

export enum Weekday {
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

export interface ShowInputDTO {
    bandId: string,
    weekDay: Weekday,
    startTime: number,
    endTime: number
}

export interface ShowOutputDTO {
    id: string,
    bandId: string,
    weekDay: Weekday,
    startTime: number,
    endTime: number,
    mainGenre?: string,
    bandName?: string
}