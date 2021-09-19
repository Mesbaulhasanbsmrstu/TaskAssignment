namespace API.Entities
{
    public class TADAHistory
    {
         public int  id { get; set; }
        
        public string date { get; set; }
        public string Name { get; set; }
        public string travelCost { get; set; }
        public string lunchCost { get; set; }
        public string instrumentsCost { get; set; }
        public int paid { get; set; }
    }
}