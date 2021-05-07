package Model;

import java.util.Objects;

public class DateTime implements java.io.Serializable{
    private String day;  //Played match date
    private String month;  //played match month
    private String year;   //played year

    public DateTime(String day,String month,String year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public String getDay() {

        return day;
    }

    public void setDay(String day) {

        this.day = day;
    }

    public String getMonth() {

        return month;
    }

    public void setMonth(String month) {

        this.month = month;
    }

    public String getYear() {

        return year;
    }

    public void setYear(String year) {

        this.year = year;
    }

    @Override
    public String toString() {
        return day+ '/' + month + '/'+ year ;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DateTime dateTime = (DateTime) o;
        return day == dateTime.day &&
                month == dateTime.month &&
                year == dateTime.year ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(day, month, year);
    }


    public String[] split(String s, int i) {

        return new String[0];
    }
}
