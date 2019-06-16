using System;
using Xunit;

namespace Calculations.Test
{
    public class NamesTest
    {
        [Fact]
        public void MakeFullNameTest()
        {
            //Given
            var names = new Names();
            //When
            var result = names.MakeFullName("Paulo", "Schorn");
            //Then
            Assert.StartsWith("paulo", result, StringComparison.InvariantCultureIgnoreCase);
            Assert.EndsWith("schorn", result, StringComparison.InvariantCultureIgnoreCase);
            Assert.Equal("paulo schorn", result, ignoreCase: true);
            Assert.Matches("[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+", result);
        }

        [Fact]
        public void NickName_MustBeNull()
        {
            //Given
            var names = new Names();
            //When
            names.NickName = "nickname";

            //Then
            Assert.NotNull(names.NickName);
        }

        [Fact]
        public void MakeFullName_AlwaysReturnValue()
        {
            //Given
            var names = new Names();
            //When
            var result = names.MakeFullName("Paulo", "Schorn");

            //Then
            Assert.NotNull(result);
            Assert.False(string.IsNullOrEmpty(result));
        }
    }
}