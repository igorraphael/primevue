import '@fullcalendar/core/vdom'; // solve problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendar.options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin]
};
const $fullCalendar = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$fullCalendar = FullCalendar;
    }
};
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($fullCalendar);
});
