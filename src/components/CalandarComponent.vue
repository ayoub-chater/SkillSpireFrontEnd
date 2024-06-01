<template>
    <header class="cd-main-header text-center flex flex-column flex-center">
        <!-- <p class="margin-top-md margin-bottom-xl">👈 <a class="cd-article-link"
                href="https://codyhouse.co/gem/schedule-template">Article &amp; Download</a></p> -->

        <h1 class="text-xl">Schedule </h1>
    </header>

    <div class="cd-schedule cd-schedule--loading margin-top-lg margin-bottom-lg js-cd-schedule">
        <div class="cd-schedule__timeline">
            <ul>
                <li><span>09:00</span></li>
                <li><span>09:30</span></li>
                <li><span>10:00</span></li>
                <li><span>10:30</span></li>
                <li><span>11:00</span></li>
                <li><span>11:30</span></li>
                <li><span>12:00</span></li>
                <li><span>12:30</span></li>
                <li><span>13:00</span></li>
                <li><span>13:30</span></li>
                <li><span>14:00</span></li>
                <li><span>14:30</span></li>
                <li><span>15:00</span></li>
                <li><span>15:30</span></li>
                <li><span>16:00</span></li>
                <li><span>16:30</span></li>
                <li><span>17:00</span></li>
                <li><span>17:30</span></li>
                <li><span>18:00</span></li>
            </ul>
        </div> <!-- .cd-schedule__timeline -->

        <div class="cd-schedule__events">
            <ul>
                <ul class="cd-schedule__group" v-for="(centerSchedule, centerName) in centerSchedules"
                    :key="centerName">
                    <div class="cd-schedule__top-info "><span>{{ centerName }} </span></div>
                    <ul>
                        <li class="cd-schedule__event ct" v-for="event in centerSchedule" :key="event.id" :style="{ backgroundColor: randomColor() }">
                            <a :data-start="event.start_time" :data-end="event.end_time" :data-content="event.content"
                                :data-event="event.event_id" href="#0">
                                <em class="cd-schedule__name">{{ event.name }}</em>
                            </a>
                        </li>
                    </ul>
                </ul>

                <li class="cd-schedule__group">
                    <div class="cd-schedule__top-info"><span>Tuesday</span></div>

                    <ul>
                        <li class="cd-schedule__event">
                            <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout"
                                data-event="event-2" href="#0">
                                <em class="cd-schedule__name">Rowing Workout</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="11:30" data-end="13:00" data-content="event-restorative-yoga"
                                data-event="event-4" href="#0">
                                <em class="cd-schedule__name">Restorative Yoga</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="13:30" data-end="15:00" data-content="event-abs-circuit" data-event="event-1"
                                href="#0">
                                <em class="cd-schedule__name">Abs Circuit</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="15:45" data-end="16:45" data-content="event-yoga-1" data-event="event-3"
                                href="#0">
                                <em class="cd-schedule__name">Yoga Level 1</em>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="cd-schedule__group">
                    <div class="cd-schedule__top-info"><span>Wednesday</span></div>

                    <ul>
                        <li class="cd-schedule__event">
                            <a data-start="09:00" data-end="10:15" data-content="event-restorative-yoga"
                                data-event="event-4" href="#0">
                                <em class="cd-schedule__name">Restorative Yoga</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="10:45" data-end="11:45" data-content="event-yoga-1" data-event="event-3"
                                href="#0">
                                <em class="cd-schedule__name">Yoga Level 1</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="12:00" data-end="13:45" data-content="event-rowing-workout"
                                data-event="event-2" href="#0">
                                <em class="cd-schedule__name">Rowing Workout</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="13:45" data-end="15:00" data-content="event-yoga-1" data-event="event-3"
                                href="#0">
                                <em class="cd-schedule__name">Yoga Level 1</em>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="cd-schedule__group">
                    <div class="cd-schedule__top-info"><span>Thursday</span></div>

                    <ul>
                        <li class="cd-schedule__event">
                            <a data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1"
                                href="#0">
                                <em class="cd-schedule__name">Abs Circuit</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="12:00" data-end="13:45" data-content="event-restorative-yoga"
                                data-event="event-4" href="#0">
                                <em class="cd-schedule__name">Restorative Yoga</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="15:30" data-end="16:30" data-content="event-abs-circuit" data-event="event-1"
                                href="#0">
                                <em class="cd-schedule__name">Abs Circuit</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="17:00" data-end="18:30" data-content="event-rowing-workout"
                                data-event="event-2" href="#0">
                                <em class="cd-schedule__name">Rowing Workout</em>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="cd-schedule__group">
                    <div class="cd-schedule__top-info"><span>Friday</span></div>

                    <ul>
                        <li class="cd-schedule__event">
                            <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout"
                                data-event="event-2" href="#0">
                                <em class="cd-schedule__name">Rowing Workout</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="12:30" data-end="14:00" data-content="event-abs-circuit" data-event="event-1"
                                href="#0">
                                <em class="cd-schedule__name">Abs Circuit</em>
                            </a>
                        </li>

                        <li class="cd-schedule__event">
                            <a data-start="15:45" data-end="16:45" data-content="event-yoga-1" data-event="event-3"
                                href="#0">
                                <em class="cd-schedule__name">Yoga Level 1</em>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="cd-schedule-modal">
            <header class="cd-schedule-modal__header">
                <div class="cd-schedule-modal__content">
                    <span class="cd-schedule-modal__date"></span>
                    <h3 class="cd-schedule-modal__name"></h3>
                </div>

                <div class="cd-schedule-modal__header-bg"></div>
            </header>

            <div class="cd-schedule-modal__body">
                <div class="cd-schedule-modal__event-info"></div>
                <div class="cd-schedule-modal__body-bg"></div>
            </div>

            <a href="#0" class="cd-schedule-modal__close text-replace">Close</a>
        </div>

        <div class="cd-schedule__cover-layer"></div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useFomations } from '../stores/counter'; 
import axios from 'axios'; 

export default {
  setup() {
    const Fomations = useFomations();
    const centerSchedules = ref({});

    const randomColor = () => {
      const colors = ['#588093', '#F6B065', '#433352', '#A2B9B2', '#FFFF33']; // Add more colors if needed
      return colors[Math.floor(Math.random() * colors.length)];
    };

        onMounted(async () => {
            await Fomations.fetchFormations();
            const formations = Fomations.formations;
            formations.forEach(formation => {
                const centerName = formation.centre.name;
                if (!centerSchedules.value[centerName]) {
                    centerSchedules.value[centerName] = [];
                }
                centerSchedules.value[centerName].push({
                    id: formation.id,
                    name: formation.title,
                    start_time: formation.start_date,
                    end_time: formation.end_date,
                    content: formation.description,
                    event_id: formation.id
                });
            });
        });

        return {
            centerSchedules,
            randomColor
        };
    }
};
</script>

<style lang="scss" >
.ct{
    background-color: black;
}


@import "./assets/schedule-template/css/style.css";
//@import "./assets/schedule-template/css/style.scss";
</style>